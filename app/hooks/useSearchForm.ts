import { useState, FormEvent } from "react";

export interface SearchFormData {
  destino: string;
  fechaInicio: Date | null;
  fechaFin: Date | null;
  viajeros: number;
}

export function useSearchForm(initialData?: Partial<SearchFormData>) {
  const [formData, setFormData] = useState<SearchFormData>({
    destino: "",
    fechaInicio: null,
    fechaFin: null,
    viajeros: 1,
    ...initialData
  });

  const updateField = <K extends keyof SearchFormData>(
    field: K,
    value: SearchFormData[K]
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateMultipleFields = (updates: Partial<SearchFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleSubmit = (
    e: FormEvent, 
    callback?: (data: SearchFormData) => void,
    preventDefault = true
  ) => {
    if (preventDefault) {
      e.preventDefault();
    }
    
    const fechaInicioStr = formData.fechaInicio ? formData.fechaInicio.toLocaleDateString() : "[Fecha inicio]";
    const fechaFinStr = formData.fechaFin ? formData.fechaFin.toLocaleDateString() : "[Fecha fin]";
    
    console.log("Formulario enviado:", formData);
    
    callback?.(formData);
    
    // Mensaje de depuración (puede ser removido en producción)
    alert(`Buscando ${formData.destino ? `a ${formData.destino}` : "destino"} para ${formData.viajeros} viajero(s) desde ${fechaInicioStr} hasta ${fechaFinStr}`);
  };

  const reset = () => {
    setFormData({
      destino: "",
      fechaInicio: null,
      fechaFin: null,
      viajeros: 1
    });
  };

  const isFormValid = () => {
    return formData.destino.trim() !== "" && 
           formData.fechaInicio !== null && 
           formData.fechaFin !== null &&
           formData.viajeros > 0;
  };

  return {
    formData,
    updateField,
    updateMultipleFields,
    handleSubmit,
    reset,
    isFormValid
  };
}
