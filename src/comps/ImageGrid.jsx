import useFirestore from "../hooks/useFirestore";
import { motion } from "motion/react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {docs &&
        docs.map((doc) => (
          <motion.div
            onClick={() => setSelectedImg(doc.url)}
            whileHover={{ opacity: 0.7 }}
            layout
            key={doc.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <ImageListItem>
              <img
                src={doc.url}
                srcSet={doc.url}
                alt={doc.fileName}
                loading="lazy"
              />
            </ImageListItem>
          </motion.div>
        ))}
    </ImageList>
  );
};

export default ImageGrid;
