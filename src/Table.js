import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Button } from 'react-bootstrap';

const { SearchBar } = Search;

let classFilter;
let prodInventoryNameFilter;
let detailFilter;
let unitMeasFilter;
let unitNowFilter;
let unitCostFilter;
let costFilter;

const ClearButton = (props) => {
	const handleClick = () => {
		props.onSearch('');
		props.clearAllFilter();
	};
	return (
		<Button
			variant="secondary"
			onClick={handleClick}
			style={{
				fontSize: '16px',
				padding: '5px',
				margin: '10px',
				height: '40px'
			}}>
			Clear
		</Button>
	);
};

class Table extends React.Component {
	columns = [
		{
			dataField: 'class',
			text: 'Class Name',
			filter: textFilter({
				getFilter: (filter) => {
					classFilter = filter;
				}
			})
		},
		{
			dataField: 'prodInventoryNameFilter',
			text: 'Prodcut Inventory',
			filter: textFilter({
				getFilter: (filter) => {
					prodInventoryNameFilter = filter;
				}
			}),
			sort: true
		},
		{
			dataField: 'detail',
			text: 'detailFilter',
			filter: textFilter({
				getFilter: (filter) => {
					detailFilter = filter;
				}
			})
		},
		{
			dataField: 'unitMeasFilter',
			text: 'unitMeasFilter',
			filter: textFilter({
				getFilter: (filter) => {
					unitMeasFilter = filter;
				}
			})
		},
		{
			dataField: 'unitNowFilter',
			text: 'unitNowFilter',
			filter: textFilter({
				getFilter: (filter) => {
					unitNowFilter = filter;
				}
			})
		},
		{
			dataField: 'prodInventoryNameFilter',
			text: 'Prodcut Inventory',
			filter: textFilter({
				getFilter: (filter) => {
					prodInventoryNameFilter = filter;
				}
			}),
			sort: true
		},
		{
			dataField: 'unitCostFilter',
			text: 'unitCostFilter',
			filter: textFilter({
				getFilter: (filter) => {
					unitCostFilter = filter;
				}
			})
		},
		{
			dataField: 'costFilter',
			text: 'costFilter',
			filter: textFilter({
				getFilter: (filter) => {
					costFilter = filter;
				}
			})
		}
	];

	clearAllFilter() {
		classFilter('');
		prodInventoryNameFilter('');
		unitMeasFilter('');
		detailFilter('');
		unitNowFilter('');
		unitCostFilter('');
		costFilter('');
	}

	products = [
		{
			class: 'Inventory-Supplies Plant Growth',
			prodInventoryName: 'Supplies Plant Growth',
			detail: 'MW',
			prodX: '',
			unitMeas: 'oz',
			unitNow: '0.20',
			unitCost: '$ 60.00',
			cost: '$ 12.00',
			recipes: ''
		},
		{
			class: 'Inventory-Supplies Plant Growth',
			prodInventoryName: 'Supplies Plant Growth',
			detail: 'ACDC',
			prodX: '',
			unitMeas: 'oz',
			unitNow: '5.60',
			unitCost: '$ 60.00',
			cost: '$ 336.00',
			recipes: ''
		},
		{
			class: 'Inventory-Supplies Plant Growth',
			prodInventoryName: 'Supplies Plant Growth',
			detail: 'ACDC/LemD',
			prodX: '',
			unitMeas: 'oz',
			unitNow: '1.30',
			unitCost: '$ 60.00',
			cost: '$ 78.00',
			recipes: ''
		},
		{
			class: 'Inventory-Supplies Plant Growth',
			prodInventoryName: 'Supplies Plant Growth',
			detail: 'MW/DHDS',
			prodX: '',
			unitMeas: 'oz',
			unitNow: '1.50',
			unitCost: '$ 60.00',
			cost: '$ 90.00',
			recipes: ''
		}
	];

	render() {
		return (
			<div>
				<h1>Clear search bar and filter</h1>
				<ToolkitProvider
					bootstrap4
					keyField="name"
					data={this.products}
					columns={this.columns}
					search>
					{(props) => (
						<div>
							<SearchBar
								{...props.searchProps}
								style={{ width: '400px', height: '40px' }}
							/>
							<ClearButton
								{...props.searchProps}
								clearAllFilter={this.clearAllFilter}
							/>
							<BootstrapTable
								{...props.baseProps}
								filter={filterFactory()}
								noDataIndication="There is no solution"
								striped
								hover
								condensed
							/>
						</div>
					)}
				</ToolkitProvider>
			</div>
		);
	}
}

export default Table;
