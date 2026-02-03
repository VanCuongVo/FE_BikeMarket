import { Search } from 'lucide-react'
import bikes from '../../../../mock/bikes';
import Dropdown from './Dropdown'


function SearchSection({ filters, setFilters, keyword, setKeyword }) {
    const updateFilters = (key, value) => {
        setFilters(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }
    const handleSearch = () => {
        setFilters(prev => ({
            ...prev,
            keyword: keyword.trim(),
        }))
    }
    const typeOptions = [...new Set(bikes.map(b => b.type))]
    const brandOptions = [...new Set(bikes.map(b => b.brand))]
    const conditionOptions = [...new Set(bikes.map(b => b.condition))]
    const priceOptions = [...new Set(bikes.map(b => b.price))]

    return (
        <section className="space-y-4">
            <h1 className="text-2xl font-semibold">Tìm kiếm xe đạp</h1>

            <div className="relative">
                <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                    size={18}
                    onClick={handleSearch}
                />
                <input
                    placeholder="Tìm kiếm theo tên, hãng..."
                    className="w-full h-11 pl-10 pr-4 rounded-md bg-gray-100 border "
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Dropdown
                    label={filters?.type || 'Tất cả loại xe'}
                    options={['Tất cả loại xe', ...typeOptions]}
                    onSelect={(v) => updateFilters('type', v)}
                />

                <Dropdown
                    label={filters?.brand || 'Tất cả hãng'}
                    options={['Tất cả hãng', ...brandOptions]}
                    onSelect={(v) => updateFilters('brand', v)}
                />

                <Dropdown
                    label={filters?.condition || 'Tất cả tình trạng'}
                    options={['Tất cả tình trạng', ...conditionOptions]}
                    onSelect={(v) => updateFilters('condition', v)}
                />
                <Dropdown
                    label={filters?.price || 'Tất cả giá'}
                    options={['Tất cả giá', ...priceOptions]}
                    onSelect={(v) => updateFilters('price', v)}
                />
            </div>
        </section>
    )
}
export default SearchSection
