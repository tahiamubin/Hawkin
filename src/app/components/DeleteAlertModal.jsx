import { Sparkles } from "@gravity-ui/icons";
import { AlertDialog, Button, Modal } from "@heroui/react";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";


const DeleteAlertModal = ({listingId}) => {
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/listing/${listingId}` , {
      method: 'DELETE',
      headers: 
     { 'content-type' : 'application/json'}
    })
   

  }
  return (
    <div>
      <AlertDialog>
        {" "}
        <button className="btn btn-sm bg-[#3D6B4F] hover:bg-[#5A8F6E] rounded-xl px-4  text-white">
          <RiDeleteBin6Line />{" "}
        </button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete this permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>this pet</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete Project
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteAlertModal;
