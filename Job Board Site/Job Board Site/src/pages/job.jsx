import { useUser } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";
import useFetch from "@/hooks/use-fetch";
import { getSingleJob, updateHiringStatus } from "@/api/apiJobs";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ApplyJobDrawer from "@/components/apply-job";
import ApplicationCard from "@/components/application-card";

const JobPage = () => {
  const { isLoaded, user } = useUser();
  const { id } = useParams();

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(
    updateHiringStatus,
    { job_id: id }
  );

  // function to change the status
  const handleStatusChange = (value) => {
    const isOpen = value === "open";
    fnHiringStatus(isOpen).then(() => fnJob());
  };

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded]);

  // barloader
  if (!isLoaded) {
    return (
      <BarLoader className="mb-4" width={"100%"} color="rgb(129, 29, 29)" />
    );
  }

  return (
    // to display job tite and company name
    <div className="flex flex-col gap-8 mt-5">
      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center pb-3">
        <h1 className="gradient-title font-semibold text-3xl sm:text-6xl">
          {job?.title}
        </h1>
        <img
          src={job?.company?.logo_url}
          alt={job?.title}
          className="sm:h-14 h-9 mt-4"
        />
      </div>

      {/* Horizontal line for location, applicants, and job status */}
      <div className="flex justify-between items-center gap-6 sm:text-lg">
        {/* Job Location */}
        <div className="flex items-center gap-2">
          <MapPinIcon />
          {job?.location}
        </div>

        {/* Number of Applicants */}
        <div className="flex items-center gap-2">
          <Briefcase />
          {job?.applications.length} Applicants
        </div>

        {/* Job Status */}
        <div className="flex items-center gap-2">
          {job?.isOpen ? (
            <>
              <DoorOpen /> Open
            </>
          ) : (
            <>
              <DoorClosed /> Closed
            </>
          )}
        </div>
      </div>

      {/* hiring status with barloader */}
      {loadingHiringStatus && (
        <BarLoader className="mt-4" width={"100%"} color="rgb(129, 29, 29)" />
      )}

      {/* show the select button to recruiter only if he has created that specific job */}
      {job?.recruiter_id === user?.id && (
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger
            className={`w-full ${job?.isOpen ? "bg-green-900" : "bg-red-900"}`}
          >
            <SelectValue
              placeholder={
                "Hiring Status " + (job?.isOpen ? "( Open )" : "( Closed )")
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      )}

      <h2 className="text-2xl sm:text-3xl font-semibold">About the job</h2>
      <p className="sm:text-lg">{job?.description}</p>

      <h2 className="text-2xl sm:text-3xl font-semibold">
        What are we looking for?
      </h2>

      <div className="markdown-body">
        <MDEditor.Markdown
          source={job?.requirement} // Ensure `job?.requirement` is in markdown format
          className="bg-transparent sm:text-lg"
        />

        {/* render applications */}
        {job?.recruiter_id !== user?.id && (
          <ApplyJobDrawer
            job={job}
            user={user}
            fetchJob={fnJob}
            applied={job?.applications.find(
              (ap) => ap.candidate_id === user.id
            )}
          />
        )}
      </div>

      {/* Applications Section (Visible only to recruiters) */}
      {job?.applications?.length > 0 && job?.recruiter_id === user?.id && (
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold">Applications</h2>
          {job?.applications.map((application) => {
            return <ApplicationCard key={application.id} application = {application}/>
          })}
        </div>
      )}
    </div>
  );
};

export default JobPage;