export default function CommerceSchematic() {
  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label="A storefront authenticates through Auth.js, creates an order, and settles it via Stripe or PayPal webhooks that drive an idempotent order state machine backed by MongoDB and an admin panel."
    >
      <rect className="sbox" x="10" y="14" width="110" height="30" />
      <text className="st" x="21" y="33">Storefront</text>

      <path className="sline" d="M120 29 L172 29" />
      <rect className="sbox-a" x="172" y="14" width="120" height="30" />
      <text className="st-a" x="183" y="27">Auth.js</text>
      <text className="st-s" x="183" y="38">OAuth / magic link</text>

      <path className="sline" d="M65 44 L65 82" />
      <rect className="sbox" x="10" y="82" width="110" height="30" />
      <text className="st" x="21" y="101">Cart + checkout</text>

      <path className="sline" d="M120 97 L172 97" />
      <rect className="sbox" x="172" y="70" width="110" height="26" />
      <text className="st" x="183" y="87">Stripe</text>
      <rect className="sbox" x="172" y="102" width="110" height="26" />
      <text className="st" x="183" y="119">PayPal</text>

      <path className="sflow" d="M282 83 L330 83 L330 150" />
      <path className="sflow" d="M282 115 L330 115" />
      <text className="st-s" x="288" y="76">webhook</text>

      <rect className="sbox-a" x="120" y="150" width="210" height="34" />
      <text className="st-a" x="132" y="165">Order state machine</text>
      <text className="st-s" x="132" y="177">idempotent, retry-safe</text>

      <path className="sline" d="M225 184 L225 206" />
      <rect className="sbox" x="120" y="206" width="100" height="26" />
      <text className="st" x="130" y="223">MongoDB</text>
      <rect className="sbox" x="232" y="206" width="98" height="26" />
      <text className="st" x="242" y="223">Admin panel</text>
      <path className="sline" d="M281 195 L281 206" />
      <path className="sline" d="M225 195 L281 195" />
    </svg>
  );
}
