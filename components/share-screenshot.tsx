import screenshot from "../utils/screenshot"

const ShareScreenshot = () => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="max-w-[600px] flex justify-end space-x-4">
        <button
          aria-label="截屏"
          onClick={screenshot}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4 3h6v2H9V8zm0 4h6v2H9v-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};


export default ShareScreenshot;
