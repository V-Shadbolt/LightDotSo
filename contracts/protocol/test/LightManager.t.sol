// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.13;

import "@lightdotso/foundry/BaseTest.sol";
import "@lightdotso/protocol/LightManager.sol";

contract LightManagerTest is BaseTest {
  LightManager private lightManager;

  function setUp() public {
    setUpLightProxies();
  }

  function testLightController() public {
    assertEq(
      address(wrappedLightManager.controller()),
      address(proxyLightController)
    );
  }

  function testSyncAllContracts() public {
    vm.expectEmit(true, true, false, true, address(wrappedLightManager));
    vm.expectEmit(true, true, false, true, address(wrappedLightManager));
    vm.expectEmit(true, true, false, true, address(wrappedLightManager));
    emit ContractSynced(keccak256("LightOrb"), address(proxyLightOrb));
    emit ContractSynced(
      keccak256("LightOrbFactory"),
      address(proxyLightOrbFactory)
    );
    emit ContractSynced(keccak256("LightSpace"), address(proxyLightSpace));
    wrappedLightManager.syncAllContracts();
  }

  function testLightManagerProxySlot() public {
    _testProxyImplementationSlot(
      address(proxyLightManager),
      address(implementationLightManager)
    );

    // Initializable
    _testArbitrarySlot(
      address(proxyLightManager),
      bytes32(uint256(0)),
      bytes32(uint256(2))
    );
    // OwnableUpgradeable
    _testArbitrarySlot(
      address(proxyLightManager),
      bytes32(uint256(51)),
      bytes32(uint256(uint160(address(this))))
    );
    /// UUPSUpgradeable
    _testArbitrarySlot(
      address(proxyLightManager),
      bytes32(uint256(101)),
      bytes32(uint256(0))
    );
    /// LightManagerStorage
    _testArbitrarySlot(
      address(proxyLightManager),
      bytes32(uint256(201)),
      bytes32(uint256(uint160(address(proxyLightController))))
    );
    _testArbitrarySlot(
      address(proxyLightManager),
      // keccak256(uint256(9) . keccak256(uint256(4) . uint256(1))),
      // keccak256([keccak256("LightOrb"), bytes32(uint256(202))]),
      bytes32(keccak256(abi.encodePacked(keccak256("LightOrb"), uint256(202)))),
      bytes32(uint256(0))
    );
  }
}
