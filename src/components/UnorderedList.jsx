export const UnorderedList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	return (
		<ul>
			{items.map((item, i) => (
				<li key={i}>
					<ItemComponent {...{ [resourceName]: item }} />
				</li>
			))}
		</ul>
	);
};
