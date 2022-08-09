// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.13;
import "forge-std/Test.sol";

contract SlotTest is Test {
  function _testArbitrarySlot(
    address _proxy,
    bytes32 _slot,
    bytes32 _expected
  ) internal {
    bytes32 proxySlot = vm.load(address(_proxy), _slot);
    bytes32 target;
    assembly {
      mstore(0, proxySlot)
      target := mload(0)
    }
    assertEq(target, _expected);
  }

  function _testProxyImplementationSlot(address _proxy, address _implementation)
    internal
  {
    bytes32 implSlot = bytes32(
      uint256(keccak256("eip1967.proxy.implementation")) - 1
    );
    bytes32 proxySlot = vm.load(address(_proxy), implSlot);
    address addr;
    assembly {
      mstore(0, proxySlot)
      addr := mload(0)
    }
    assertEq(addr, address(_implementation));
  }

  function _testBeaconImplementationSlot(
    address _proxy,
    address _implementation
  ) internal {
    bytes32 beaconSlot = bytes32(
      uint256(keccak256("eip1967.proxy.beacon")) - 1
    );
    bytes32 proxySlot = vm.load(address(_proxy), beaconSlot);
    address addr;
    assembly {
      mstore(0, proxySlot)
      addr := mload(0)
    }
    assertEq(addr, address(_implementation));
  }
}
