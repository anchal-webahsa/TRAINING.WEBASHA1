export default function ImageModal() {
  return (
    <div
      className="modal fade"
      id="imageModal"
      tabIndex="-1"
      aria-hidden="true"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-transparent border-0">
          <div className="modal-header p-0 border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body text-center">
            <img id="imagePreview" alt="Preview" className="img-fluid" />
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-outline-light" id="prevImage">Prev</button>
              <button className="btn btn-outline-light" id="nextImage">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}