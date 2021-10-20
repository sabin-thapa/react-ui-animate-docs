import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import PropTypes from "prop-types";

export const Tab = forwardRef((props, ref) => {
  const { panes, onTabChange, activeUserProp } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(null);

  useImperativeHandle(ref, () => ({
    activateIndex: (index) => {
      setActiveIndex(index);
    },
  }));

  useEffect(() => {
    setActiveTab(panes[activeIndex]);
  }, [activeIndex, panes]);

  useEffect(() => {
    onTabChange && onTabChange(activeIndex);
  }, [activeIndex, onTabChange]);

  useEffect(() => {
    activeUserProp && setActiveIndex(1);
  }, [activeUserProp]);

  return (
    <div className="tab">
      <div className="tab-title">
        {panes.map(({ title, onClick }, index) => {
          return (
            <div
              key={index}
              onClick={
                onClick
                  ? () => onClick(activeIndex)
                  : () => setActiveIndex(index)
              }
              className={activeIndex === index ? "tab-item active" : "tab-item"}
            >
              {title}
            </div>
          );
        })}
      </div>
      {activeTab && <div className="tab-content">{activeTab.render()}</div>}
    </div>
  );
});

Tab.propTypes = {
  panes: PropTypes.arrayOf(
    PropTypes.shape({
      render: PropTypes.func.isRequired,
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
  onTabChange: PropTypes.func,
};
