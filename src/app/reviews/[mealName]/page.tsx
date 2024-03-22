import ReviewPanel from "@/components/ReviewPanel";

export default function page() {
  return (
    <div className="grid align-items-center justify-content-center">
      <div className="col-4">
        <ReviewPanel />
      </div>
      <div className="grid align-items-center justify-content-center">
        <div className="col-4">
          <ReviewPanel />
        </div>
      </div>
      <div className="grid align-items-center justify-content-center">
        <div className="col-4">
          <ReviewPanel />
        </div>
      </div>
    </div>
  );
}
