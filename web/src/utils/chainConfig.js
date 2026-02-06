import {
  mainnet,
  polygon,
  arbitrum,
  optimism,
  base,
  bsc,
  avalanche,
  fantom,
  sepolia
} from "wagmi/chains";

export const chains = [
  mainnet,    
  polygon,    
  arbitrum,    
  optimism,   
  base,       
  bsc,        
  avalanche,  
  fantom,     
  sepolia      
];

export function getChainById(id) {
  return chains.find(chain => chain.id === id);
}
