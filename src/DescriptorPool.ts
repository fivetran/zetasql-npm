import { DescriptorProto } from './types/google/protobuf/DescriptorProto';
import { EnumDescriptorProto } from './types/google/protobuf/EnumDescriptorProto';
import { FieldDescriptorProto } from './types/google/protobuf/FieldDescriptorProto';
import { FileDescriptorProto } from './types/google/protobuf/FileDescriptorProto';

export interface DescriptorPool {
  /**
   * Returns the {@code ZetaSQLEnumDescriptor} of the enum with given {@code name} or null if not
   * found.
   */
  findEnumTypeByName(name: string): ZetaSQLEnumDescriptor;

  /**
   * Returns the {@code ZetaSQLDescriptor} of the message with given {@code name} or null if not
   * found.
   */
  findMessageTypeByName(name: string): ZetaSQLDescriptor;

  /**
   * Returns the {@code ZetaSQLFileDescriptor} of the file with given {@code name} or null if not
   * found.
   */
  findFileByName(name: string): ZetaSQLFileDescriptor;

  /**
   * Returns the {@code ZetaSQLFieldDescriptor} on the given {@code descriptor} or null if not
   * found. Note, this method should resolve any extensions, and should not call or make use of the
   * convenience method {@link ZetaSQLFieldDescriptor.findFieldByNumber} to resolve this.
   *
   * <p>That method may make use of this one, however.
   */
  findFieldByNumber(descriptor: ZetaSQLDescriptor, n: number): ZetaSQLFieldDescriptor;

  /**
   * Return all the file descriptors in this descriptor pool in proto file dependency order.
   *
   * <p>Additionally, this should return all transitive dependencies explicitly.
   *
   * <p>This generally means descriptor.proto will be first, and application specific protos will be
   * last.
   */
  getAllFileDescriptorsInDependencyOrder(): FileDescriptorProto[];
}

/**
 * Wrapped {@code FileDescriptor} with the {@code ImmutableZetaSQLDescriptorPool} from which it
 * was created.
 */
export interface ZetaSQLFileDescriptor {
  getDescriptorPool(): DescriptorPool;

  getDescriptor(): FileDescriptorProto;
}

/**
 * Wrapped {@code EnumDescriptor} with the {@code ImmutableZetaSQLDescriptorPool} from which it
 * was created.
 */
export interface ZetaSQLEnumDescriptor {
  getDescriptorPool(): DescriptorPool;

  getDescriptor(): EnumDescriptorProto;
}

/**
 * Wrapped {@code Descriptor} with the {@code ImmutableZetaSQLDescriptorPool} from which it was
 * created.
 */
export interface ZetaSQLDescriptor {
  getDescriptorPool(): DescriptorPool;

  getDescriptor(): DescriptorProto;
}

/**
 * Wrapped {@code FieldDescriptor} with the {@code ZetaSQLDescriptorPool} from which it was
 * created.
 */
export interface ZetaSQLFieldDescriptor {
  getDescriptorPool(): DescriptorPool;

  getDescriptor(): FieldDescriptorProto;
}
