import React from "react";

const RequestCheck = () => {
  return (
    <div>
      <Modal>
        <button className="btn btn-sm flex-1 bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white border-none rounded-xl gap-1">
          <FaEdit /> Request
        </button>
        <Modal.Backdrop
          className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
          variant="blur"
        >
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.Header className="items-center text-center">
                <Modal.Heading>Adoption Request for Pet name</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <h1 className="text-xl font-bold">user name</h1>

                <div className="flex justify-between">
                  <p>useremail@gmail.com</p>
                  <div className="badge badge-soft badge-success">Success</div>
                </div>

                <p>{/* discription */}i want to adopt this pet</p>
              </Modal.Body>
              <Modal.Footer className="flex-col-reverse">
                {/* these will show if the request is approved or not */}
                <Button className="w-full" slot="close" variant="danger">
                  Reject
                </Button>
                <Button
                  className="w-full bg-[#FBF8F3] text-[#C8714A]"
                  slot="close"
                >
                  Approved
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

export default RequestCheck;
