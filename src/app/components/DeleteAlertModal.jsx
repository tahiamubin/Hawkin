import { Sparkles } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteAlertModal = () => {
  return (
    <div>
      <Modal>
        <button className="btn btn-sm bg-[#3D6B4F] hover:bg-[#5A8F6E] rounded-xl px-4  text-white">
          <RiDeleteBin6Line />
        </button>
        <Modal.Backdrop
          className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
          variant="blur"
        >
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.Header className="items-center text-center">
                {/* <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Sparkles className="size-5" />
                </Modal.Icon> */}
                <Modal.Heading>Delete Pet Listing?</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Are you sure your want to permanently delete update{" "}
                  <span className="font-black"> petName</span>
                  listing? This cannot be undone
                </p>
              </Modal.Body>
              <Modal.Footer className="flex-col-reverse">
                <Button className="w-full" slot="close" variant="danger">
                  Delete permanently
                </Button>
                <Button
                  className="w-full bg-[#FBF8F3] text-[#C8714A]"
                  slot="close"
                >
                  Keep listing
                </Button>
              </Modal.Footer>
              <Modal.CloseTrigger />
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default DeleteAlertModal;
