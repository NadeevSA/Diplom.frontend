import style from './play.module.css';
import { Card } from '@consta/uikit/Card';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Text } from '@consta/uikit/Text';
import { useState } from 'react';
import { Combobox } from '@consta/uikit/Combobox';
import { Button } from '@consta/uikit/Button';
import { AppContent } from '../../PaneContainer';
import { Switch } from '@consta/uikit/Switch';

interface Props {}

type Item1 = {
    label: string;
    id: number;
};
  
const items: Item1[] = [
    {
      label: 'Первый',
      id: 1,
    },
    {
      label: 'Второй',
      id: 2,
    },
    {
      label: 'Третий',
      id: 3,
    },
];

function ComboboxExampleMultiple(Props: { name: string | undefined; }) {
    const [value, setValue] = useState<Item1[] | null>();
    return (
      <Combobox
        className={style.combobox}
        placeholder={Props.name}
        items={items}
        value={value}
        onChange={({ value }) => setValue(value)}
        multiple
      />
    );
}

const Filter = () => {
    return(
      <Card className={style.card}>
        <ComboboxExampleMultiple name="Выберите проект"></ComboboxExampleMultiple>
        <ComboboxExampleMultiple name="Выберите данные"></ComboboxExampleMultiple>
        <Switch
          align="center"
          size="l"
          label="Ручной ввод" checked={undefined}/>
        <Button className={style.button} width="full" size="l" view="secondary" label="Собрать"/>
        <Button className={style.button} width="full" size="l" view="secondary" label="Запустить"/>
        <Button className={style.button} width="full" size="l" view="secondary" label="Выполнить"/>
        <Button className={style.button} width="full" size="l" view="secondary" label="Очистить"/>
      </Card>
    )
}

export const play = (props: Props) => {
    return (
        <Grid gap="xl" cols="4">
            <GridItem><Filter></Filter></GridItem>
            <GridItem colStart="2" col="3"><Card><AppContent></AppContent></Card></GridItem>
        </Grid>
    )
}