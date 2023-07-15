interface YearTableProps {
    list: {year: number; amount: number}[];
}

export function YearTable(props: YearTableProps) {
    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {props.list.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
