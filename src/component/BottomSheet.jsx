import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bottomSheetSelector, bottomStatusSelector } from '../selector/globalSelector';
import { closeBottomSheet } from '../App/features/gameSlice';

const BottomSheet = () => {
  const dispatch = useDispatch()
  const status = useSelector(bottomStatusSelector)
  const bottomSheet = useSelector(bottomSheetSelector)
  const closeSheet = () => {
    dispatch(closeBottomSheet())
  }
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform transform ${
        status ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closeSheet}
      ></div>

      {/* Bottom Sheet */}
      <div
        className="absolute bottom-0  w-full bg-black rounded-t-3xl p-4 shadow-lg"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {bottomSheet}
      </div>
    </div>
  );
};

export default BottomSheet;
