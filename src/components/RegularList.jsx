export const RegularList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	return (
		<div>
			{items.map((item, i) => (
				<ItemComponent key={i} {...{ [resourceName]: item }} />
			))}
		</div>
	);
};
