import { useNavigation } from "react-auth-navigation";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/all";

import { Box } from "../";

export const NextPrevButton = ({ left, right }) => {
  const {
    navigation: { navigate },
  } = useNavigation();

  return (
    <div className="nextprev">
      <Box flexBox>
        <Box flex={1}>
          {left && (
            <button
              className="nextprev-button left"
              onClick={() => navigate(left.to)}
            >
              <span className="nextprev-button-label">Previous</span>

              <span className="nextprev-button-text">
                <span>
                  <BiChevronsLeft
                    size={24}
                    style={{ position: "relative", top: 6 }}
                  />{" "}
                </span>{" "}
                <span>{left.text}</span>
              </span>
            </button>
          )}
        </Box>

        <div style={{ width: 20 }} />

        <Box flex={1} flexBox jEnd alCenter>
          {right && (
            <button
              className="nextprev-button right"
              onClick={() => navigate(right.to)}
            >
              <span className="nextprev-button-label">Next</span>

              <span className="nextprev-button-text">
                <span className="text">{right.text}</span>
                <span className="icon">
                  <BiChevronsRight
                    size={24}
                    style={{ position: "relative", top: 6 }}
                  />{" "}
                </span>{" "}
              </span>
            </button>
          )}
        </Box>
      </Box>
    </div>
  );
};
