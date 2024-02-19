export function trustCagesRootCA(evClient: any): Promise<void>;
export function addAttestationListener(config: any, attestationCache: any, pcrManager: any): void;
export function attestCageConnection(hostname: any, cert: any, cagePcrManager: any, attestationCache: any): any;
export function parseCageNameAndAppFromHost(hostname: any): {
    cageName: any;
    appUuid: any;
};
export function hasAttestationBindings(): boolean;
export function addAttestationListenerBeta(config: any, cagesAttestationInfo: any): void;
export function attestCageConnectionBeta(hostname: any, cert: any, cagesAttestationInfo?: {}): any;
/**
 * Ensure that the provided attestation data is correctly structured
 * @param {unknown} providedAttestationData
 * @throws {MalformedAttestationData}
 */
export function validateAttestationData(providedAttestationData: unknown): void;
