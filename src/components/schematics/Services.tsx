export default function ServicesSchematic() {
  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label="An API gateway issues JWTs with role claims and routes to user, post, and comment services, each owning its own database, communicating asynchronously through a RabbitMQ broker."
    >
      <rect className="sbox" x="140" y="10" width="120" height="26" />
      <text className="st" x="152" y="27">Client</text>

      <path className="sline" d="M200 36 L200 56" />
      <rect className="sbox-a" x="120" y="56" width="160" height="34" />
      <text className="st-a" x="132" y="71">API gateway</text>
      <text className="st-s" x="132" y="83">issues JWT + role claims</text>

      <path className="sline" d="M140 90 L60 90 L60 120" />
      <path className="sline" d="M200 90 L200 120" />
      <path className="sline" d="M260 90 L340 90 L340 120" />

      <rect className="sbox" x="14" y="120" width="92" height="30" />
      <text className="st" x="26" y="139">User svc</text>
      <rect className="sbox" x="154" y="120" width="92" height="30" />
      <text className="st" x="166" y="139">Post svc</text>
      <rect className="sbox" x="294" y="120" width="92" height="30" />
      <text className="st" x="306" y="139">Comment svc</text>

      <path className="sline" d="M60 150 L60 166" />
      <rect className="sbox" x="24" y="166" width="72" height="20" />
      <text className="st-s" x="34" y="180">own db</text>
      <path className="sline" d="M200 150 L200 166" />
      <rect className="sbox" x="164" y="166" width="72" height="20" />
      <text className="st-s" x="174" y="180">own db</text>
      <path className="sline" d="M340 150 L340 166" />
      <rect className="sbox" x="304" y="166" width="72" height="20" />
      <text className="st-s" x="314" y="180">own db</text>

      <rect className="sbox-a" x="120" y="204" width="160" height="26" />
      <text className="st-a" x="132" y="221">RabbitMQ events</text>

      <path className="sflow" d="M60 186 L60 217 L120 217" />
      <path className="sflow" d="M280 217 L340 217 L340 186" />
      <path className="sflow" d="M200 186 L200 204" />
    </svg>
  );
}
