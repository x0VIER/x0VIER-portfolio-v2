import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import axios from 'axios'

export default function CryptoTracker() {
  const [cryptos, setCryptos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,solana,polkadot,chainlink,polygon,avalanche-2&order=market_cap_desc&sparkline=false&price_change_percentage=24h'
        )
        setCryptos(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching crypto data:', error)
        setLoading(false)
      }
    }

    fetchCryptoData()
    const interval = setInterval(fetchCryptoData, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="text-center text-[#808080] font-mono">Loading crypto prices...</div>
    )
  }

  return (
    <div className="space-y-4">
      {cryptos.map((crypto) => {
        const priceChange = crypto.price_change_percentage_24h
        const isPositive = priceChange >= 0

        return (
          <div
            key={crypto.id}
            className="border border-[#1a1a1a] p-4 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
                <div>
                  <div className="text-white font-mono font-bold">{crypto.name}</div>
                  <div className="text-xs text-[#808080] font-mono uppercase">{crypto.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-mono font-bold">
                  ${crypto.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className={`text-xs font-mono flex items-center gap-1 justify-end ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {Math.abs(priceChange).toFixed(2)}%
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div>
                <div className="text-[#808080] font-mono">Market Cap</div>
                <div className="text-white font-mono">${(crypto.market_cap / 1e9).toFixed(2)}B</div>
              </div>
              <div>
                <div className="text-[#808080] font-mono">24h Volume</div>
                <div className="text-white font-mono">${(crypto.total_volume / 1e9).toFixed(2)}B</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
