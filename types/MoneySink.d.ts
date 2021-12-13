/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MoneySinkInterface extends ethers.utils.Interface {
  functions: {
    "bentoBox()": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "exit(uint256)": FunctionFragment;
    "harvest(uint256,address)": FunctionFragment;
    "lose(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "skim(uint256)": FunctionFragment;
    "sushi()": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bentoBox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "lose", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "skim", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "sushi", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "bentoBox", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sushi", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class MoneySink extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: MoneySinkInterface;

  functions: {
    bentoBox(overrides?: CallOverrides): Promise<[string]>;

    "bentoBox()"(overrides?: CallOverrides): Promise<[string]>;

    claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    exit(
      balance: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "exit(uint256)"(
      balance: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    harvest(
      balance: BigNumberish,
      arg1: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "harvest(uint256,address)"(
      balance: BigNumberish,
      arg1: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lose(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lose(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    skim(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "skim(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sushi(overrides?: CallOverrides): Promise<[string]>;

    "sushi()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  bentoBox(overrides?: CallOverrides): Promise<string>;

  "bentoBox()"(overrides?: CallOverrides): Promise<string>;

  claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  exit(
    balance: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "exit(uint256)"(
    balance: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  harvest(
    balance: BigNumberish,
    arg1: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "harvest(uint256,address)"(
    balance: BigNumberish,
    arg1: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lose(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lose(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  skim(arg0: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "skim(uint256)"(
    arg0: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sushi(overrides?: CallOverrides): Promise<string>;

  "sushi()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address,bool,bool)"(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    bentoBox(overrides?: CallOverrides): Promise<string>;

    "bentoBox()"(overrides?: CallOverrides): Promise<string>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    exit(balance: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "exit(uint256)"(
      balance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    harvest(
      balance: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "harvest(uint256,address)"(
      balance: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lose(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "lose(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    skim(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "skim(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sushi(overrides?: CallOverrides): Promise<string>;

    "sushi()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    bentoBox(overrides?: CallOverrides): Promise<BigNumber>;

    "bentoBox()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(overrides?: Overrides): Promise<BigNumber>;

    "claimOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    exit(balance: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "exit(uint256)"(
      balance: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    harvest(
      balance: BigNumberish,
      arg1: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "harvest(uint256,address)"(
      balance: BigNumberish,
      arg1: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lose(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "lose(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    skim(arg0: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "skim(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sushi(overrides?: CallOverrides): Promise<BigNumber>;

    "sushi()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bentoBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bentoBox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    exit(
      balance: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "exit(uint256)"(
      balance: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    harvest(
      balance: BigNumberish,
      arg1: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "harvest(uint256,address)"(
      balance: BigNumberish,
      arg1: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lose(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lose(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    skim(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "skim(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sushi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "sushi()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
