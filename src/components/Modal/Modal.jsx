import './Modal.css';
export const Modal = ({ children, isShow, closeForm }) => {
	return (
		<>
			{isShow && (
				<div className='modal-background' onClick={closeForm}>
					<div
						className='modal-body'
						onClick={(e) => e.stopPropagation()}
					>
						<button type='button' onClick={closeForm}>
							Close Modal
						</button>
						{children}
					</div>
				</div>
			)}
		</>
	);
};
