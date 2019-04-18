const filters = {
    searchText:'',
    status: false 
 }

const getFilters = () => filters

const setFilters = ({ searchText, status }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof status === 'boolean') {
        filters.status = status
    }
}

export { getFilters, setFilters }
