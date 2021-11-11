import { MdInfo } from "react-icons/all";

export const AlertInfo = () => {
  return (
    <div className="alert-info">
      <div className="alert-info-title">
        <div className="alert-info-title-icon">
          <MdInfo />
        </div>

        <div className="alert-info-title-text">INFO</div>
      </div>
      This is a documentation website of React UI Animate stable release.
      <br />
      <br />
      If you find any bugs or issue, then you can submit an issue{" "}
      <span
        onClick={() =>
          window.open("https://github.com/dipeshrai123/react-ui-animate/issues")
        }
        style={{
          borderBottom: "1px solid #3399ff",
          color: "#353535",
          cursor: "pointer",
        }}
      >
        here in this link
      </span>{" "}
      .
    </div>
  );
};
