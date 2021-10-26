import { useNavigation } from "react-auth-navigation";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/all";

export const NextPrevButton = () => {
  const {
    navigation: { navigate, routes },
    location,
  } = useNavigation();

  const routeKeys = Object.keys(routes);

  const currentRoute = routeKeys.find((route) => {
    return routes[route].path === location.pathname;
  });

  const currentRouteIndex = routeKeys.indexOf(currentRoute);

  const prevNextRoute = routeKeys.reduce((acc, route, index) => {
    if (index === currentRouteIndex - 1) {
      acc = { ...acc, left: routes[route] };
    } else if (index === currentRouteIndex + 1) {
      acc = { ...acc, right: routes[route] };
    }

    return acc;
  }, {});

  return (
    <div className="nextprev">
      <div className="nextprev-left">
        {prevNextRoute.left && (
          <button
            className="nextprev-button left"
            onClick={() => navigate(prevNextRoute.left.path)}
          >
            <span className="nextprev-button-label">Previous</span>

            <span className="nextprev-button-text">
              <span>
                <BiChevronsLeft
                  size={24}
                  style={{ position: "relative", top: 6 }}
                />{" "}
              </span>{" "}
              <span>{prevNextRoute.left.name}</span>
            </span>
          </button>
        )}
      </div>

      <div className="nextprev-right">
        {prevNextRoute.right && (
          <button
            className="nextprev-button right"
            onClick={() => navigate(prevNextRoute.right.path)}
          >
            <span className="nextprev-button-label">Next</span>

            <span className="nextprev-button-text">
              <span className="text">{prevNextRoute.right.name}</span>
              <span className="icon">
                <BiChevronsRight
                  size={24}
                  style={{ position: "relative", top: 6 }}
                />{" "}
              </span>{" "}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
