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
      Due to time constraint, we are unable to complete this documentation. We
      are working on this documentation. We will update as soon as possible.
    </div>
  );
};
