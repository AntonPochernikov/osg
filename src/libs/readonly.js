export default (target, key, descriptor) => ({ ...descriptor, writable: false });
