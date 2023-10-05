import { useEffect, useState } from "react";

import Modal from "../../shared/ui/Modal";
import MobileModal from "../../shared/ui/MobileModal";
import { Input } from "../../shared/ui/Input";

import CrossIcon from "../../shared/icons/CrossIcon";
import Button from "../../shared/ui/Button";

const EditModal = ({ data, state, setstate }) => {
  const [name, setName] = useState(data.name || "");
  const [about, setAbout] = useState(data.about || "");
  const [location, setLocation] = useState(data.location || "");
  const [birthValue, setBirthValue] = useState(data.birth || "");

  const birthDateHandler = (e) => {
    if (
      // (upd тестил на андроиде и там не регестрируется нажатие на бекспейс поэтому добавил это)
      e.length < birthValue.length &&
      birthValue[birthValue.length - 1] === "."
    ) {
      setBirthValue(e.slice(0, -1));
      // console.log("tr");
    } else if (e.length === 2) {
      setBirthValue(e + ".");
    } else if (e.length === 5) {
      setBirthValue(e + ".");
    } else if (
      e.slice(0, 2).match(/[a-zA-Zа-яА-Я\W]/g) ||
      e.slice(3, 5).match(/[a-zA-Zа-яА-Я\W]/g) ||
      e.slice(6, 10).match(/[a-zA-Zа-яА-Я\W]/g)
    ) {
      console.log("");
    } else {
      setBirthValue(e);
    }
  };

  useEffect(() => {}, [birthValue]);

  return (
    <>
      {/* pc */}
      <Modal isOpen={state}>
        <div className="h-fit flex flex-col gap-[12px]">
          {/* header */}
          <div className="w-full flex justify-end items-center">
            <CrossIcon onClick={() => setstate(false)} />
          </div>
          {/* header */}

          {/* body */}
          <Input
            placeholder="Ваше имя..."
            label="Имя"
            value={name}
            onChange={(e) => setName(e)}
            maxLength={25}
          />
          <Input
            placeholder="Example: 23 y.o. designer from San Francisco."
            label="Статус"
            value={about}
            onChange={(e) => setAbout(e)}
            maxLength={50}
          />
          <Input
            placeholder="Откуда вы..."
            label="Страна, город"
            value={location}
            onChange={(e) => setLocation(e)}
            maxLength={25}
          />
          <Input
            placeholder="Когда вы родились..."
            label="Дата рождения"
            value={birthValue}
            onChange={(e) => birthDateHandler(e)}
            maxLength={10}
          />
          <Button
            loader
            text="Сохранить"
            styles="mt-[12px]"
            onClick={() => {
              setstate(false);
            }}
          />
          {/* body */}
        </div>
      </Modal>
      {/* pc */}

      {/* mobile */}
      <MobileModal slideToLeft isOpen={state}>
        <div className="h-full flex flex-col gap-[12px] px-[12px] pt-[12px]">
          {/* header */}
          <div className="w-full flex justify-end items-center">
            <CrossIcon onClick={() => setstate(false)} />
          </div>
          {/* header */}

          {/* body */}
          <div className="overflow-y-scroll w-full flex flex-col gap-[12px]">
            <Input
              placeholder="Ваше имя..."
              label="Имя"
              value={name}
              onChange={(e) => setName(e)}
              maxLength={25}
            />
            <Input
              placeholder="Example: 23 y.o. designer from San Francisco."
              label="Статус"
              value={about}
              onChange={(e) => setAbout(e)}
              maxLength={50}
            />
            <Input
              placeholder="Откуда вы..."
              label="Страна, город"
              value={location}
              onChange={(e) => setLocation(e)}
              maxLength={25}
            />
            <Input
              placeholder="Когда вы родились..."
              label="Дата рождения"
              value={birthValue}
              onChange={(e) => birthDateHandler(e)}
              maxLength={10}
            />
            <Button
              loader
              text="Сохранить"
              styles="my-[12px]"
              onClick={() => {
                setstate(false);
              }}
            />
          </div>
          {/* body */}
        </div>
      </MobileModal>
      {/* mobile */}
    </>
  );
};

export default EditModal;
