import React, { memo, useRef, useState, useEffect } from "react";
import { Box, Popper, Paper, Typography } from "@mui/material";

function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth ||
    element.scrollWidth > 100
  );
}

const CellExpand = memo(function GridCellExpand({
  cell,
  cellExpanded,
  width,
  ...props
}) {
  const wrapper = useRef(null);
  const cellDiv = useRef(null);
  const cellValue = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [showFullCell, setShowFullCell] = useState(false);
  const [showPopper, setShowPopper] = useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = true; //isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
        setShowFullCell(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  return (
    <Box
      ref={wrapper}
      sx={sx.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box ref={cellDiv} />
      <Typography variant="body3" ref={cellValue}>
        {cell}
      </Typography>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width }}
          sx={sx.popper}
        >
          <Paper
            elevation={2}
            sx={{
              ...sx.paper,
              minHeight: wrapper.current.offsetHeight - 3,
            }}
          >
            {cellExpanded}
          </Paper>
        </Popper>
      )}
    </Box>
  );
});

export default CellExpand;

const sx = {
  popper: {
    zIndex: (theme) => theme.zIndex.modal,
  },
  root: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
  },
  paper: {
    maxWidth: 600,
    p: 1,
  },
  text: {
    whiteSpace: "pre-wrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
