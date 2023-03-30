import classes from './Table.module.css';
const Table = () => {
	return (
		<table className={classes.table}>
			<tr>
				<th>Seri Tủ</th>
				<th>Tên tủ</th>
				<th>Trạng thái</th>
			</tr>
			<tr>
				<td>12345</td>
				<td>Tủ 1</td>
				<td>Chưa xử lý</td>
			</tr>
			<tr>
				<td>12345</td>
				<td>Tủ 2</td>
				<td>Đã xử lý</td>
			</tr>
		</table>
	);
};
export default Table;
