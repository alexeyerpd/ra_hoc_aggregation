interface MonthTableProps {
    list: {month: number; amount: number}[];
}

export function MonthTable(props: MonthTableProps) {
    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {props.list.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
