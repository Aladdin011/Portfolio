export default function OperationsSchematic() {
  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label="A browser client passes through an auth and row-level-security gate to nine department modules, all backed by one jsonb record table, with a realtime channel returning updates to the client."
    >
      <rect className="sbox" x="8" y="14" width="96" height="30" />
      <text className="st" x="20" y="33">Browser client</text>

      <path className="sline" d="M56 44 L56 66" />
      <rect className="sbox-a" x="8" y="66" width="96" height="34" />
      <text className="st-a" x="20" y="81">Auth + RLS</text>
      <text className="st-s" x="20" y="93">Admin / HR / Staff</text>

      <path className="sline" d="M104 83 L150 83" />

      <rect className="sbox" x="150" y="14" width="112" height="22" />
      <text className="st" x="159" y="29">Procurement</text>
      <rect className="sbox" x="150" y="42" width="112" height="22" />
      <text className="st" x="159" y="57">Projects</text>
      <rect className="sbox" x="150" y="70" width="112" height="22" />
      <text className="st" x="159" y="85">HR</text>
      <rect className="sbox" x="150" y="98" width="112" height="22" />
      <text className="st" x="159" y="113">Finance</text>
      <rect className="sbox" x="150" y="126" width="112" height="22" />
      <text className="st-s" x="159" y="141">+ 5 more modules</text>

      <path className="sline" d="M262 25 L300 25 L300 170" />
      <path className="sline" d="M262 53 L300 53" />
      <path className="sline" d="M262 81 L300 81" />
      <path className="sline" d="M262 109 L300 109" />
      <path className="sline" d="M262 137 L300 137" />

      <rect className="sbox-a" x="252" y="170" width="140" height="34" />
      <text className="st-a" x="262" y="185">module_records</text>
      <text className="st-s" x="262" y="197">one jsonb table</text>

      <path className="sflow" d="M252 187 L56 187 L56 100" />
      <text className="st-s" x="88" y="182">realtime channel</text>
      <text className="st-s" x="8" y="228">Handoffs tracked across module boundaries</text>
    </svg>
  );
}
