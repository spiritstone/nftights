export function truncateAddress(address: string): string {
    if (!address) return '';
    return address.length > 10 ? `${address.slice(0, 10)}...` : address;
}
