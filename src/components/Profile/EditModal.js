import Modal from "../../shared/ui/Modal";
import MobileModal from "../../shared/ui/MobileModal";

const EditModal = ({ state, setstate }) => {
  return (
    <>
      {/* pc */}
      <Modal isOpen={state}>
        <div
          className="bg-red-500 w-[50px] h-[50px]"
          onClick={() => setstate(false)}
        />
      </Modal>
      {/* pc */}

      {/* mobile */}
      <MobileModal slideToLeft isOpen={state}>
        <div
          className="bg-red-500 w-[50px] h-[50px]"
          onClick={() => setstate(false)}
        />
      </MobileModal>
      {/* mobile */}
    </>
  );
};

export default EditModal;
