"use client";
import { Upload, Loader2 } from "lucide-react";
import { useState } from "react";

interface UploadCardProps {
  isLoading?: boolean;
  onFileSelect: (file: File) => void;
}

export default function UploadCard({ isLoading = false, onFileSelect }: UploadCardProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-2xl p-12 text-center transition ${
        dragActive ? "border-blue-500 bg-blue-600/10" : "border-gray-700 bg-gray-800/50"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {isLoading ? (
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
          <p className="text-lg font-semibold">Analyzing document...</p>
          <p className="text-zinc-400">This may take a moment</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <Upload className="h-12 w-12 text-blue-600" />
          <div>
            <p className="text-lg font-semibold mb-1">Upload your document</p>
            <p className="text-zinc-400">Drag and drop or click to select</p>
          </div>
          <input
            type="file"
            onChange={handleChange}
            disabled={isLoading}
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <button
              disabled={isLoading}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold disabled:opacity-50"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              Select File
            </button>
          </label>
          <p className="text-xs text-zinc-500">PDF, DOC, DOCX, XLS, XLSX up to 10MB</p>
        </div>
      )}
    </div>
  );
}
