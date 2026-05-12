export class ListAvailableStocks {
    public Balance?: number;
    public TransitQuantity?: number;
    public ItemId?: string;
    public Name?: string;
    public BatchCode?: string;
    public PalletNo?: string;
    public Location?: string;
    public Aging?: number;
    public CustomerId?: number;
    public CustomerName?: string; 
       public TransctionDate?: Date;
       public Status?: string;  
       public Title?: string;  
       public SNno?: string; 
       public PRno?: string; 
       public Pool?: string;  
       public InboundPool?: string;
       public Description?: string;
       public StatusByShipChild?: string;
       public WarehouseId?: number;
       public Warehouse?: string;
       public UOM?: number; 
public Quantity?: number;


    constructor(values: Object = {}) {
      if (values) {
        Object.assign(this, values);
      }
    }
  }
  