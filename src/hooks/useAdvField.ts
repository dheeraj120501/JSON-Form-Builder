import { useState, useEffect } from "react";
import { UIComponent } from "../types";

const useAdvField = (data: UIComponent[]): [boolean, boolean, () => void] => {
  const [isAdvField, setIsAdvField] = useState(false);
  const [showAdvField, setShowAdvField] = useState(false);
  useEffect(() => {
    setIsAdvField(false);
    data.forEach((e) => {
      if (!e.validate.required) {
        setIsAdvField(true);
      }
    });
  }, [data]);

  const toggleAdvField = () => {
    setShowAdvField(!showAdvField);
  };

  return [isAdvField, showAdvField, toggleAdvField];
};

export default useAdvField;
