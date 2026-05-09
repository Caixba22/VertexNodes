export type CatalogDomainId = "data-structures" | "algorithms";

export type CatalogCategoryId =
  | "linear-memory"
  | "tree-systems"
  | "graph-systems"
  | "associative-memory"
  | "probabilistic-structures"
  | "advanced-structures"
  | "sorting-basics"
  | "efficient-sorting"
  | "distribution-sorting"
  | "hybrid-sorting"
  | "parallel-sorting"
  | "graph-traversal"
  | "pathfinding"
  | "tree-operations";

export type CatalogDomain = {
  id: CatalogDomainId;
  title: string;
  description: string;
  order: number;
};

export type CatalogCategory = {
  id: CatalogCategoryId;
  domainId: CatalogDomainId;
  title: string;
  description: string;
  order: number;
};

export type CatalogItemType = "data-structure" | "algorithm";

export type CatalogItem = {
  id: string;
  name: string;
  type: CatalogItemType;
  categoryId: CatalogCategoryId;
  description: string;
  complexity?: string;
  tags?: string[];
};