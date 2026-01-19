# Blockchain & Web3 Testing Prompts

## 📋 Metadata
- **Difficulty**: Advanced
- **Estimated Time**: 45min
- **Prerequisites**: Understanding of blockchain, smart contracts, Web3
- **Tags**: #advanced #blockchain #web3 #smart-contracts #crypto
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
Generate comprehensive testing strategies for blockchain applications, smart contracts, and Web3 integrations.

## 📝 Prompt Templates

### 1. Smart Contract Testing

```
Create comprehensive tests for smart contract:

Contract Name: [CONTRACT_NAME]
Blockchain: [ETHEREUM/POLYGON/BSC/SOLANA]
Language: [SOLIDITY/RUST/VYPER]
Functions: [LIST_MAIN_FUNCTIONS]

Generate tests for:
- Function correctness
- Gas optimization
- Security vulnerabilities
- Edge cases and boundaries
- Access control
- State transitions
- Event emissions
- Revert conditions

Framework: [HARDHAT/TRUFFLE/FOUNDRY]
Language: [JAVASCRIPT/TYPESCRIPT/SOLIDITY]
```

### 2. Web3 Integration Testing

```
Create tests for Web3 application integration:

Application: [APP_NAME]
Wallet Support: [METAMASK/WALLETCONNECT/COINBASE_WALLET]
Networks: [MAINNET/TESTNET/LOCAL]
Features: [LIST_WEB3_FEATURES]

Test scenarios:
- Wallet connection/disconnection
- Network switching
- Transaction signing
- Balance checking
- Contract interaction
- Error handling
- Gas estimation

Framework: [ETHERS.JS/WEB3.JS/WAGMI]
```

### 3. NFT Testing

```
Generate NFT testing strategy:

NFT Contract: [CONTRACT_ADDRESS]
Standard: [ERC-721/ERC-1155]
Features: [MINTING/TRANSFER/ROYALTIES/METADATA]

Test:
- Minting functionality
- Transfer restrictions
- Royalty calculations
- Metadata validation
- Ownership verification
- Approval mechanisms
- Batch operations (if ERC-1155)

Include gas cost analysis.
```

### 4. DeFi Protocol Testing

```
Create test suite for DeFi protocol:

Protocol: [PROTOCOL_NAME]
Type: [DEX/LENDING/STAKING/YIELD]
Tokens: [LIST_TOKENS]
Key Functions: [SWAP/DEPOSIT/WITHDRAW/CLAIM]

Test scenarios:
- Liquidity pool operations
- Price oracle accuracy
- Slippage calculations
- Impermanent loss scenarios
- Flash loan protection
- Reentrancy attacks
- Economic exploits

Include security audit checklist.
```

### 5. Blockchain Transaction Testing

```
Generate transaction testing scenarios:

Transaction Type: [TRANSFER/CONTRACT_CALL/MULTI_SIG]
Network: [NETWORK_NAME]
Expected Behavior: [DESCRIBE]

Test:
- Transaction submission
- Confirmation handling
- Failed transaction recovery
- Gas price optimization
- Nonce management
- Transaction replacement
- Receipt validation
- Event log parsing
```

## 🔧 Customization Guide

### Placeholders Explained

- **[CONTRACT_NAME]**: Your smart contract name
  - Example: `TokenSale`, `NFTMarketplace`
  
- **[BLOCKCHAIN]**: Target blockchain
  - Example: `Ethereum`, `Polygon`, `Binance Smart Chain`
  
- **[WALLET_SUPPORT]**: Supported wallets
  - Example: `MetaMask, WalletConnect, Coinbase Wallet`

## 💡 Example Usage

### Scenario
Testing an ERC-20 token smart contract.

### Filled Prompt
```
Create comprehensive tests for smart contract:

Contract Name: MyToken (ERC-20)
Blockchain: Ethereum
Language: Solidity
Functions: transfer, approve, transferFrom, mint, burn

Generate tests for:
- Function correctness
- Gas optimization
- Security vulnerabilities
- Edge cases and boundaries
- Access control
- State transitions
- Event emissions
- Revert conditions

Framework: Hardhat
Language: TypeScript
```

### Expected Output
```typescript
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyToken", function () {
  let token;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    token = await Token.deploy("MyToken", "MTK", 1000000);
  });

  describe("Transfer", function () {
    it("Should transfer tokens between accounts", async function () {
      await token.transfer(addr1.address, 50);
      expect(await token.balanceOf(addr1.address)).to.equal(50);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      await expect(
        token.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });

    it("Should emit Transfer event", async function () {
      await expect(token.transfer(addr1.address, 50))
        .to.emit(token, "Transfer")
        .withArgs(owner.address, addr1.address, 50);
    });
  });

  describe("Gas Optimization", function () {
    it("Should use reasonable gas for transfers", async function () {
      const tx = await token.transfer(addr1.address, 100);
      const receipt = await tx.wait();
      expect(receipt.gasUsed).to.be.below(60000);
    });
  });

  describe("Security", function () {
    it("Should prevent unauthorized minting", async function () {
      await expect(
        token.connect(addr1).mint(addr1.address, 1000)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
});
```

## ✅ Expected Output

Quality indicators:
- [ ] Comprehensive test coverage
- [ ] Security vulnerability checks
- [ ] Gas optimization tests
- [ ] Edge case handling
- [ ] Event emission validation

## 🔗 Related Prompts

- [Security Testing](../../automation-qa/security-testing/) - Security best practices
- [API Testing](../../automation-qa/api-automation/) - For Web3 API testing
- [Performance Testing](../../automation-qa/load-testing/) - For blockchain load testing

## 📚 Additional Resources

- [Hardhat Documentation](https://hardhat.org/docs)
- [OpenZeppelin Test Helpers](https://docs.openzeppelin.com/test-helpers/)
- [Ethereum Testing Guide](https://ethereum.org/en/developers/docs/testing/)
- [Smart Contract Security Best Practices](https://consensys.github.io/smart-contract-best-practices/)

## 💭 Tips for Best Results

1. **Test on Testnets First**: Always test on testnets before mainnet
2. **Gas Optimization**: Monitor gas costs in tests
3. **Security Focus**: Prioritize security testing
4. **Use Forks**: Test against mainnet forks for realistic scenarios
5. **Audit**: Get professional audits for production contracts

## 🐛 Troubleshooting

**Issue**: Tests fail on mainnet fork
- **Solution**: Ensure correct block number, check RPC endpoint

**Issue**: Gas costs too high
- **Solution**: Optimize contract code, batch operations

**Issue**: Flaky tests
- **Solution**: Use proper async/await, increase timeouts for blockchain confirmations

---

**Note**: Blockchain testing requires understanding of blockchain fundamentals. Always validate with blockchain experts and security auditors.
