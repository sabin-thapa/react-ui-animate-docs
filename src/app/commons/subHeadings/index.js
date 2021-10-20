import { useEffect } from "react";
import { useNavigation } from "react-auth-navigation";
import { useSelector, useDispatch } from "react-redux";
import { useScroll } from "react-ui-animate";

import { setSubHeadingLinks } from "../../../redux";

export const SubHeadings = () => {
  const { location } = useNavigation();
  const { list } = useSelector((state) => state.subHeadings);

  return (
    <div className="subheadings">
      <ul className="subheadings-list">
        {list.map((subheading, index) => {
          console.log(subheading);
          return (
            <li
              key={index}
              className={
                subheading.active
                  ? "subheadings-list-item active"
                  : "subheadings-list-item"
              }
            >
              <a
                href={`/#${location.pathname}#${subheading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(0, subheading.element.offsetTop - 100);
                }}
              >
                {subheading.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const withSubHeading = (Component) => {
  return function (props) {
    const dispatch = useDispatch();
    const { location } = useNavigation();

    useEffect(() => {
      const subLinks = [];

      const subHeadings = Array.from(
        document.getElementsByClassName("subheading")
      );

      const anchors = Array.from(
        document.getElementsByClassName("subheadings-list-item")
      );

      anchors.forEach((a) => a.classList.remove("active"));

      subHeadings.forEach((subHeading) => {
        const id = subHeading.getAttribute("id");
        subLinks.push({
          id,
          name: subHeading.innerHTML,
          active: location.hash === "#" + id,
          element: subHeading,
        });
      });

      dispatch(setSubHeadingLinks(subLinks));
    }, [dispatch, location.hash]);

    useScroll(({ scrollY }) => {
      const subHeadings = Array.from(
        document.getElementsByClassName("subheading")
      );

      const anchors = Array.from(
        document.getElementsByClassName("subheadings-list-item")
      );

      subHeadings.forEach((subheading, index) => {
        if (scrollY >= subheading.offsetTop - 100) {
          anchors.forEach((a) => a.classList.remove("active"));

          anchors[index].classList.add("active");
        }
      });
    }, []);

    return <Component {...props} />;
  };
};
