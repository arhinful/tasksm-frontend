
export default function SuccessToast({message}){
    return(
        <>
            <div className="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Bootstrap</strong>
                        <small>Success</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close">
                        </button>
                    </div>
                    <div className="toast-body">
                        {message}
                    </div>
                </div>
            </div>
        </>
    )
}
