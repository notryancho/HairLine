import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const ImageGrid = ({ images, setSelectedImg }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {images.map((img) => (
          <GridListTile key={img.id}>
            <img src={img.url} alt={img.title} />
            <GridListTileBar
              title={img.title}
              subtitle={<span>by: {img.author}</span>}
              actionIcon={
                <IconButton
                  className={classes.icon}
                  onClick={() => setSelectedImg(img.url)}
                >
                  <ZoomInIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
  setSelectedImg: PropTypes.func.isRequired,
};

export default ImageGrid;
