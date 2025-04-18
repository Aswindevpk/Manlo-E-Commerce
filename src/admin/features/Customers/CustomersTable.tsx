
import Spinner from "../../../ui/Spinner"
import Table from "../../components/Table"
import Tag from "../../ui/Tag"
import BlockToggle from "./BlockToggle"
import useCustomers from "./useCustomers"


function CustomersTable() {
  const { isLoading, customers } = useCustomers()

  if(isLoading) return <Spinner/>

  return (
    <Table columns="1fr 1fr 1fr 1fr">
      <Table.Header>
        <div>User Name</div>
        <div>Email</div>
        <div>Status</div>
        <div>Action</div>
      </Table.Header>
      <Table.Body 
      data={customers}
      render={(customers)=>(
        <Table.Row key={customers.id}>
          <div>{customers.username ?? "---"}</div>
          <div>{customers.email}</div>
          <Tag type={customers.is_blocked?"red":"green"}>{customers.is_blocked?"blocked":"active"}</Tag>
          <BlockToggle is_blocked={customers.is_blocked} userId={customers.id}/>
        </Table.Row>
      )} />
    </Table>
  )
}

export default CustomersTable