interface SortTableProps {
    list: {date: string; amount: number}[];
}

export function SortTable(props: SortTableProps) {
    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {props.list.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
