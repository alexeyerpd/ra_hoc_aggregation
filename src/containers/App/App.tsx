import * as React from 'react';
import {MonthTable} from 'components/MonthTable/MonthTable';
import {SortTable} from 'components/SortTable/SortTable';
import {YearTable} from 'components/YearTable/YearTable';
import * as dayjs from 'dayjs';
import {cn} from 'utils/classname';

import '../../styles/root.scss';
import './App.scss';

const block = cn('app');

interface ListItemDto {
    date: string;
    amount: number;
}

export function App() {
    const [list, setList] = React.useState<ListItemDto[]>([]);

    React.useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json',
        )
            .then((res) => res.json())
            .then((data) => setList(data.list));
    }, []);

    return (
        <div className={block()}>
            <Adapter
                Component={MonthTable}
                data={list}
                adapter={(arr) => arr.map(({amount, date}) => ({amount, month: dayjs(date).format('MMM')}))}
            />
            <Adapter
                Component={YearTable}
                data={list}
                adapter={(arr) =>
                    arr.map(({amount, date}) => ({amount, year: Number(dayjs(date).format('YYYY'))}))
                }
            />
            <Adapter
                Component={SortTable}
                data={list}
                // @ts-ignore
                adapter={(arr) => arr.toSorted((a, b) => dayjs(b.date).diff(a.date))}
            />
        </div>
    );
}

interface AdapterProps<T = ListItemDto[]> {
    data: T;
    adapter: (data: T) => any;
    Component: any;
}

function Adapter({data, adapter, Component}: AdapterProps) {
    return <Component list={adapter ? adapter(data) : data} />;
}
