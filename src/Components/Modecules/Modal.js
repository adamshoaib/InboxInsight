import * as React from "react";
import Typography from "../Atoms/Typography";
import Modal from "@mui/material/Modal";
import { Box, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ModalBox({
  title = "title",
  open,
  handleClose,
  body: BodyComponent,
  data,
}) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <div className="modal-containter-root">
            <div>
              <Typography variant="h3">{title}</Typography>
            </div>
            <div className="modal-header-icon">
              <div>
                <Tooltip title={"Close"} placement="bottom">
                  <CloseIcon
                    className="icon-curser-pointer"
                    onClick={handleClose}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
          <BodyComponent data={data} />
        </Box>
      </Modal>
    </div>
  );
}
