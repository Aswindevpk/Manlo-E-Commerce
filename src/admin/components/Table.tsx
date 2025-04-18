import { createContext, ReactNode, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div<{ columns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

interface TableContextType {
    columns: string
}

interface TableProps {
    columns: string;
    children: React.ReactNode
}

const TableContext = createContext<TableContextType | undefined>(undefined)

function Table({ columns, children }: TableProps) {
    return (
        <TableContext.Provider value={{ columns }}>
            <StyledTable role="table">{children}</StyledTable>
        </TableContext.Provider>
    )
}

function Row({ children }: { children: ReactNode }) {
    const context = useContext(TableContext)

    if (!context) throw new Error("error")

    const { columns } = context

    return (
        <StyledRow role="row" columns={columns}>{children}</StyledRow>
    )
}

function Header({ children }: { children: ReactNode }) {
    const context = useContext(TableContext)

    if (!context) throw new Error("error")

    const { columns } = context

    return (
        <StyledHeader role="row" columns={columns}>{children}</StyledHeader>
    )
}

type BodyProps<T> = {
    data?: T[];
    render: (item: T) => React.ReactNode;
}

function Body<T>({ data, render }: BodyProps<T>) {
    if (!data?.length) return <Empty>No data to show</Empty>
    return (
        <StyledBody>
            {data.map(render)}
        </StyledBody>
    )
}

Table.Header = Header
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;